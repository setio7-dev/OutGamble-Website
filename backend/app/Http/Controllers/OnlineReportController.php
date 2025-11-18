<?php

namespace App\Http\Controllers;

use App\Models\OnlineReport;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class OnlineReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $data = OnlineReport::with('user')->get();
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
                "url_link" => "required",
                "category" => "required",
                "proof" => "required",
                "contact" => "required",
                "description" => "required",
            ], [
                "required" => "Data ini Wajib Diisi!"
            ]);

            if ($validateData->fails()) {
                return response()->json([
                    "message" => $validateData->errors()->first()
                ], 422);
            }

            $user = Auth::user();
            $data = new OnlineReport();

            $data->user_id = $user->id;
            $data->url_link = $request->url_link;
            $data->category = $request->category;
            $data->description = $request->description;
            $path = Storage::disk("public")->putFile("report", $request->proof);
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
        //
        try {
            return response()->json([
                'message' => 'Get data successfully',
                'data' => OnlineReport::with('user')->find($id)
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
    public function edit(OnlineReport $onlineReport)
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
            $data = OnlineReport::find($id);
            $data->url_link = $request->url_link;
            $data->category = $request->category;
            $data->address = $request->address;
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
            $data = OnlineReport::find($id);
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
