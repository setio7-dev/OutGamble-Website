<?php

namespace App\Http\Controllers;

use App\Models\Community;
use Exception;
use Illuminate\Http\Request;

class CommunityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        try {
            return response()->json([
                'message' => 'Get data successfully',
                "data" => Community::all()
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
        //
        try {
            $data = new Community();
            $data->name = $request->name;

            $pathThumbnail = $request->file('image_thumbnail')->store('community', 'public');
            $data->image_thumbnail = $pathThumbnail;

            $pathLogo = $request->file('image_logo')->store('community', 'public');
            $data->image_logo = $pathLogo;

            $data->description = $request->description;
            $data->link = $request->link;
            $data->save();

            return response()->json([
                'message' => 'Create data successfully',
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
                'data' => Community::find($id)->get()
            ], 200);
        } catch(Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id)
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
            $data = new Community();
            $data->name = $request->name;

            $pathThumbnail = $request->file('image_thumbnail')->store('community', 'public');
            $data->image_thumbnail = $pathThumbnail;

            $pathLogo = $request->file('image_logo')->store('community', 'public');
            $data->image_logo = $pathLogo;

            $data->description = $request->description;
            $data->link = $request->link;
            $data->save();

            return response()->json([
                'message' => 'Update data successfully',
                'data' => $data
            ], 201);

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
            $data = Community::find($id);
            $data->delete();
            $data->save();

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
