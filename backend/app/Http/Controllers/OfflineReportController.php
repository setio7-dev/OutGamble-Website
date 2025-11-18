<?php

namespace App\Http\Controllers;

use App\Models\OfflineReport;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class OfflineReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $data = OfflineReport::with('user')->get();
            return response()->json([
                'message' => 'Get data successfully',
                'data' => $data
            ], 200);
        } catch(Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validateData = Validator::make($request->all(), [
                "place" => "required",
                "address" => "required",
                "category_place" => "required",
                "coordinates" => "required",
                "description" => "required",
                "contact" => "required",
            ], [
                "required" => "Data ini Wajib Diisi!"
            ]);

            if ($validateData->fails()) {
                return response()->json([
                    "message" => $validateData->errors()->first()
                ], 422);
            }

            $user = Auth::user();
            $data = new OfflineReport();

            $data->user_id = $user->id;
            $data->place = $request->place;
            $data->address = $request->address;
            $data->category_place = $request->category_place;
            $data->coordinates = $request->coordinates;;
            $data->description = $request->description;

            $path = $request->file("proof")->store("report", "public");
            $data->proof = $path;

            $data->contact = $request->contact;
            $data->save();
            $data->load('user');

            return response()->json([
                'message' => 'Berhasil membuat laporan!',
                'data' => $data
            ], 201);
        } catch(Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            return response()->json([
                'message' => 'Get dataa successfully',
                'data' => OfflineReport::with('user')->find($id)
            ], 201);
        } catch(Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OfflineReport $offlineReport)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        try {
            $user = Auth::user();
            $data = OfflineReport::find($id);
            $data->user_id = $user->id;
            $data->place = $request->place;
            $data->address = $request->address;
            $data->category_place = $request->category_place;
            $data->coordinates = $request->coordinates;;
            $data->description = $request->description;

            $path = $request->file("proof")->store("report", "public");
            $data->proof = $path;

            $data->contact = $request->contact;
            $data->save();
            $data->load('user');

            return response()->json([
                'message' => 'Update data successfully',
                'data' => $data
            ], 200);
        } catch(Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        try {
            $data = OfflineReport::find($id);
            $data->delete();

            return response()->json([
                'message' => 'Delete data successfully',
                'data' => $data
            ], 200);
        } catch(Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
